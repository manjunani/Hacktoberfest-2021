import sys

import nmap

target = str(sys.argv[1])

# List of ports we want to scan
ports = [21, 22, 80, 139, 443, 8080]

# Initiating scan variable
scan_v = nmap.PortScanner()

print('\n Scanning {target} for ports 21,22,80,443 and 8080....\n')

# Scanning all the ports
for port in ports:
    port_scan = scan_v.scan(target, str(port))
