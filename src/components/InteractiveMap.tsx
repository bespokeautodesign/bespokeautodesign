import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(false);

  // Miami shop coordinates
  const shopLocation = {
    lng: -80.3344,
    lat: 25.8389,
    address: '7943 NW 64th St, Miami, FL 33166'
  };

  useEffect(() => {
    // Check for stored API key
    const storedKey = localStorage.getItem('mapbox_token');
    if (storedKey) {
      setApiKey(storedKey);
    } else {
      setShowTokenInput(true);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !apiKey) return;

    // Initialize map
    mapboxgl.accessToken = apiKey;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [shopLocation.lng, shopLocation.lat],
        zoom: 15,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Create custom marker element
      const markerElement = document.createElement('div');
      markerElement.className = 'custom-marker';
      markerElement.innerHTML = `
        <div class="bg-primary text-primary-foreground rounded-full p-3 shadow-lg animate-pulse">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
      `;

      // Add marker
      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([shopLocation.lng, shopLocation.lat])
        .addTo(map.current);

      // Add popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-2">
          <h3 class="font-bold text-sm mb-1">Bespoke Auto Design</h3>
          <p class="text-xs text-gray-600 mb-2">${shopLocation.address}</p>
          <div class="flex gap-2">
            <button onclick="window.open('https://maps.google.com/?q=7943+NW+64th+St+Miami+FL+33166', '_blank')" 
                    class="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
              Open in Google Maps
            </button>
            <button onclick="window.open('https://maps.apple.com/?q=7943+NW+64th+St+Miami+FL+33166', '_blank')" 
                    class="text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600">
              Apple Maps
            </button>
          </div>
        </div>
      `);

      marker.setPopup(popup);

      // Show popup by default
      popup.addTo(map.current);

      // Cleanup
      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
      setShowTokenInput(true);
    }
  }, [apiKey]);

  const handleSaveToken = () => {
    if (apiKey.trim()) {
      localStorage.setItem('mapbox_token', apiKey.trim());
      setShowTokenInput(false);
    }
  };

  const openInMaps = (service: 'google' | 'apple') => {
    const address = encodeURIComponent(shopLocation.address);
    if (service === 'google') {
      window.open(`https://maps.google.com/?q=${address}`, '_blank');
    } else {
      window.open(`https://maps.apple.com/?q=${address}`, '_blank');
    }
  };

  if (showTokenInput) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Map Setup Required
          </CardTitle>
          <CardDescription>
            To display the interactive map, please enter your Mapbox public token. 
            You can get one free at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="password"
            placeholder="Enter your Mapbox public token"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <div className="flex gap-2">
            <Button onClick={handleSaveToken} disabled={!apiKey.trim()}>
              Save Token & Show Map
            </Button>
            <Button variant="outline" onClick={() => openInMaps('google')}>
              Open Google Maps
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Visit Our Shop
        </h3>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => openInMaps('google')}
          >
            Google Maps
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => openInMaps('apple')}
          >
            Apple Maps
          </Button>
        </div>
      </div>
      
      <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
        <div ref={mapContainer} className="absolute inset-0" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/5 to-transparent" />
      </div>
      
      <div className="text-sm text-muted-foreground text-center">
        <p>Click the marker for navigation options</p>
      </div>
    </div>
  );
};

export default InteractiveMap;