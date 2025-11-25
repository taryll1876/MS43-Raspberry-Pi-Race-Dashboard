# MS43 Raspberry Pi Dashboard (CarPlay-Style)
This project is a full-screen Raspberry Pi dashboard that mimics an OEM car cluster with real-time sensor data pulled from an MS43 ECU using ELM327 over Bluetooth.

## Features
- Real-time telemetry: RPM, speed, temps, boost, throttle, etc.
- CarPlay-style layout
- Fullscreen Chromium boot mode
- Modular and responsive (Bootstrap)
- Open source and customizable background/music widget

## Setup
1. Install required Python packages.
2. Pair your ELM327 Bluetooth device.
3. Configure Chromium to start in fullscreen with this dashboard.

## Run
Place all files on your Raspberry Pi and open `index.html` in Chromium full screen or use Electron to embed.
