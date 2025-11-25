MS43_RPi_Dashboard_CarPlay_Integrated NeoDash – BMW MS43 / RPi Integrated Dashboard + CarPlay

Next-generation performance dashboard for BMWs – integrates MS43 telemetry, CarPlay, drift/track mode simulation, and real-time logging on a Raspberry Pi.

🎯 Features

MS43 Telemetry Integration – Real-time RPM, speed, boost, AFR, and more

CarPlay & RPi Ready – Seamless dashboard integration for infotainment

Track & Drift Modes – Active boost switching, anti-lag, realistic gear changes

Dynamic Visuals – Neon-styled UI, RPM arc, shift lights, drift angle, G-force display

Temperature & Boost Monitoring – Brake temps, tire heat map, coolant & oil temps

Data Logging – Full session recording, CSV export, low/high boost toggles

Simulation Mode – Simulated driving for testing without a car

Responsive IC10-style Dashboard – Clean layout with carbon background & watermark

⚙️ Installation

Requirements:

Raspberry Pi 4+ or compatible device

Node.js ≥ 18 & npm OR Python 3.11+

MS43 OBD-II interface / simulator

CarPlay device for display (optional, simulation supported)

# Clone repo
git clone https://github.com/yourusername/NeoDash.git
cd NeoDash

# Install dependencies
npm install        # For Node.js version
# OR
pip install -r requirements.txt   # For Python version

# Run the dashboard
npm start          # Node.js
# OR
python3 dashboard.py

🛠 Usage

Toggle Drive Modes: Comfort / Sport / Sport+

Boost Control: Low Boost / High Boost / Anti-Lag

Track Mode Simulation: Activates drift mode, higher temperatures, faster gear changes

Logging: Click Start Log / End Log to record sessions, download CSV for analysis

Live Telemetry: Connect OBD or simulator for real-time sensor updates

📦 File Structure
NeoDash/
├─ src/                 # Core dashboard UI & simulation code
├─ assets/              # Icons, images, fonts
├─ logs/                # CSV session logs
├─ demo/                # Demo screenshots & GIFs
├─ package.json / requirements.txt
├─ README.md
└─ LICENSE

🔧 Contributing

Fork the repo

Create a branch (git checkout -b feature/awesome-feature)

Commit your changes (git commit -am 'Add awesome feature')

Push to the branch (git push origin feature/awesome-feature)

Open a Pull Request

📄 License

MIT License – see LICENSE
 for details.

🚗 About

NeoDash is designed for car enthusiasts, developers, and professional tuners who want a realistic, track-ready BMW dashboard experience on a Raspberry Pi, with full telemetry, CarPlay integration, and data logging for performance analysis.
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
