MS43_RPi_Dashboard_CarPlay_Integrated is a fully-featured automotive dashboard simulation and telemetry interface designed for BMW MS43 engine platforms. Built for Raspberry Pi, this project integrates realistic car sensor simulations, MS43 ECU data integration, and CarPlay-style visualization, delivering a professional, modern dashboard experience for track and drift applications.

The dashboard includes realistic waveforms, active boost control, gear simulation, anti-lag, and logging features, along with a highly customizable, M-theme inspired user interface. It supports track mode, drift mode, high/low boost toggles, and live telemetry monitoring of engine parameters like RPM, speed, coolant, oil temp, boost, throttle, AFR, and much more.

Features

MS43 ECU Simulation & Integration:
Monitor key engine parameters with live updates.

Raspberry Pi Ready:
Optimized for Pi 4+ for full-screen dashboard use.

CarPlay-Style Dashboard UI:
Neon, modern, M-inspired color themes with realistic animations.

Track & Drift Mode:

Track: Higher temps, faster gear changes, active boost switching.

Drift: Throttle spikes, AFR variance, tire and brake temperature simulation.

Boost & Anti-Lag Controls:
Switch between low/high boost and enable anti-lag dynamically.

Data Logging:
Log sessions and download CSV telemetry for analysis.

Realistic Sensor Simulation:

RPM, Speed, Gear, Boost, Throttle, AFR, MAF, Load, Timing, Voltage

Engine temps, Oil pressure, IAT, E85 percentage, Fuel level

Tire temps, Brake temperature, and G-force indicator

Responsive Design:
Full dashboard layout adapts to various resolutions and screen sizes.

Interactive Controls:
Toggle modes, boost levels, night mode, drift mode, and track mode with buttons or keyboard shortcuts.

Installation

Clone the repository:

git clone https://github.com/yourusername/MS43_RPi_Dashboard_CarPlay_Integrated.git
cd MS43_RPi_Dashboard_CarPlay_Integrated


Install dependencies (for Node.js or Python backend if needed):

npm install
# or if Python is used:
pip install -r requirements.txt


Run the dashboard:

# For web-based interface
sudo python3 run_dashboard.py
# Or open index.html in a browser for local simulation


Optional: Set the Raspberry Pi to boot directly into dashboard mode for a car infotainment feel.

Usage

Mode Selection: Click tiles for Comfort, Sport, or Sport+ driving modes.

Boost / Anti-Lag: Toggle high/low boost and anti-lag with buttons or shortcuts.

Night Mode: Adjust display for low-light conditions.

Track / Drift: Enable advanced simulation features.

Data Logging: Start and stop session logging; download CSV for analysis.

Screenshots

(Add dashboard screenshots here)

Contributing

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.
