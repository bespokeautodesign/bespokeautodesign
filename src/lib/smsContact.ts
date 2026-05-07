import type React from "react";
import { toast } from "sonner";

export const SMS_NUMBER_DISPLAY = "(786) 395-9172";
export const SMS_NUMBER_HREF = "sms:+17863959172";
const SMS_NUMBER_RAW = "(786) 395-9172";

const isMobileDevice = () =>
  typeof navigator !== "undefined" &&
  /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

export const handleTextUsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (isMobileDevice()) return; // allow native sms: link
  e.preventDefault();
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(SMS_NUMBER_RAW).catch(() => {});
  }
  toast(`Copied — text us at ${SMS_NUMBER_DISPLAY}`);
};