# Redundancy and Failover System Design Example

This project demonstrates how to mitigate the **Single Point of Failure (SPOF)** in system design by implementing **redundancy** and **failover** mechanisms. The project involves creating a simple load-balancing mechanism with multiple instances of a service to ensure that if one instance fails, another one takes over, keeping the system operational.

## Problem Overview: Single Point of Failure
A **Single Point of Failure (SPOF)** is any individual component in a system that, if it fails, causes the entire system to stop functioning. This is a major issue in high-availability systems like web applications, databases, or distributed systems, where downtime can result in significant data loss, service interruptions, or financial loss.

### Solution: Redundancy and Failover
To prevent SPOF, systems implement **redundancy** and **failover** strategies:
- **Redundancy**: Creating duplicate instances of critical system components (e.g., servers, databases, network components).
- **Failover**: Automatically switching from a failed instance to a healthy one to maintain service continuity.

This project demonstrates how to build a simple system where multiple services run behind a load balancer, with automatic failover in case of failure.

## Project Features
- **Load Balancer**: Directs traffic to multiple service instances.
- **Health Check**: Continuously monitors the health of each service instance.
- **Failover**: Automatically reroutes traffic to healthy instances if one fails.
- **Redundancy**: Multiple service instances ensure that there is no single point of failure.
- **Zero Downtime**: Ensures service availability even during server failures.

## Project Structure
    redundancy-failover/
    │
    ├── src/
    │   ├── loadBalancer.js          # Load balancer logic with health checks
    │   ├── serviceInstance.js       # Simulates multiple service instances
    │   └── healthChecker.js         # Monitors service instance health
    │
    ├── package.json                 # Project dependencies and metadata
    └── README.md                    # Documentation

## Requirements
- **Node.js** (v14 or later)
- **npm** or **yarn** for package management

## Setup and Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/redundancy-failover.git
    cd redundancy-failover
    ```

2. Install the required dependencies:
    ```bash
    npm install 
    ```

3. Start the application:
    ```bash
    node server.js
    ```
