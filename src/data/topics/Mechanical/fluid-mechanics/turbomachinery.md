# 🔧 Turbomachinery

Turbomachinery is a branch of fluid mechanics that deals with machines that transfer energy between a fluid and a rotating element called a **rotor**.

These machines are used in:

* Power plants
* Aircraft engines
* Hydroelectric stations
* Water supply systems
* Oil and gas industries
* HVAC systems

Almost every modern power generation system depends on turbomachinery.

---

# 📌 What is Turbomachinery?

Turbomachinery refers to machines in which energy transfer occurs between a continuously flowing fluid and a rotating shaft.

The energy transfer may occur in two ways:

1. Fluid gives energy to the rotor.
2. Rotor gives energy to the fluid.

```mermaid id="8nq5v1"
graph TD
    A[Turbomachinery]
    --> B[Energy from Fluid to Rotor]
    --> C[Energy from Rotor to Fluid]
```

---

# Basic Working Principle

Turbomachines operate based on the **change in momentum of the fluid**.

When fluid velocity changes:

* Force is produced.
* Torque is generated.
* Energy transfer occurs.

```mermaid id="v8kh6t"
graph LR
    A[Fluid Flow]
    --> B[Momentum Change]
    --> C[Force]
    --> D[Torque]
    --> E[Power]
```

---

# Classification of Turbomachines

Turbomachines are broadly classified into:

```mermaid id="u6ghw7"
graph TD
    A[Turbomachinery]
    --> B[Power Generating Machines]
    --> C[Power Absorbing Machines]
```

---

# 1️⃣ Power Generating Machines

These machines extract energy from a fluid and convert it into mechanical power.

Examples:

* Hydraulic turbines
* Steam turbines
* Gas turbines
* Wind turbines

```mermaid id="q4mz9j"
graph TD
    A[Fluid Energy]
    --> B[Turbine]
    --> C[Shaft Power]
```

---

# 2️⃣ Power Absorbing Machines

These machines receive mechanical power and transfer it to a fluid.

Examples:

* Pumps
* Compressors
* Fans
* Blowers

```mermaid id="y2hf9p"
graph TD
    A[Motor Power]
    --> B[Pump or Compressor]
    --> C[Fluid Energy]
```

---

# Major Components of Turbomachines

```mermaid id="r9kx5n"
graph TD
    A[Turbomachine]
    --> B[Rotor]
    --> C[Stator]
    --> D[Shaft]
    --> E[Casing]
```

---

## Rotor

The rotating component that exchanges energy with the fluid.

Examples:

* Turbine runner
* Pump impeller
* Compressor rotor

---

## Stator

The stationary component that guides fluid flow.

Functions:

* Directs fluid
* Improves efficiency
* Controls velocity

---

## Shaft

Transmits mechanical power between the machine and external devices.

---

## Casing

Protects internal components and guides fluid flow.

---

# Energy Transfer in Turbomachinery

Energy transfer occurs due to changes in:

* Velocity
* Pressure
* Momentum

```mermaid id="m4sp8y"
graph TD
    A[Fluid Energy]
    --> B[Pressure Energy]
    --> C[Kinetic Energy]
    --> D[Mechanical Energy]
```

---

# Euler's Turbomachine Equation

The fundamental equation governing turbomachinery is Euler's Equation.

It relates energy transfer to changes in angular momentum.

[
W
=

## U_2V_{w2}

U_1V_{w1}
]

Where:

* (W) = Work done per unit mass
* (U) = Blade velocity
* (V_w) = Whirl velocity component

---

# Importance of Euler's Equation

It helps determine:

* Turbine power output
* Pump power requirement
* Compressor performance

```mermaid id="l8rn6m"
graph LR
    A[Euler Equation]
    --> B[Power Calculation]
    --> C[Performance Analysis]
```

---

# Hydraulic Turbines

Hydraulic turbines convert water energy into mechanical energy.

```mermaid id="z7j3tq"
graph LR
    A[Water Energy]
    --> B[Turbine Runner]
    --> C[Rotational Energy]
    --> D[Generator]
    --> E[Electricity]
```

---

## Applications

* Hydroelectric power plants
* Dams
* Irrigation projects

---

# Types of Hydraulic Turbines

```mermaid id="k5r8yx"
graph TD
    A[Hydraulic Turbines]
    --> B[Impulse Turbine]
    --> C[Reaction Turbine]
```

---

# Impulse Turbine

The entire pressure energy is converted into kinetic energy before striking the turbine blades.

### Example

* Pelton Wheel

```mermaid id="p7m4ve"
graph LR
    A[Water Jet]
    --> B[Pelton Wheel]
    --> C[Rotation]
```

---

# Reaction Turbine

Energy transfer occurs through both pressure and velocity changes.

### Examples

* Francis Turbine
* Kaplan Turbine

```mermaid id="f3tz8u"
graph LR
    A[Water Flow]
    --> B[Reaction Turbine]
    --> C[Power Generation]
```

---

# Pumps

Pumps transfer mechanical energy to fluids.

Their main purpose is to increase:

* Pressure
* Flow rate
* Elevation

```mermaid id="h5zn3d"
graph TD
    A[Motor]
    --> B[Pump]
    --> C[Pressurized Fluid]
```

---

# Types of Pumps

```mermaid id="s9vr7p"
graph TD
    A[Pumps]
    --> B[Centrifugal Pump]
    --> C[Positive Displacement Pump]
```

---

# Centrifugal Pump

Most commonly used pump.

Working principle:

* Fluid enters the impeller.
* Rotating blades increase fluid velocity.
* Velocity converts into pressure.

```mermaid id="g8pd2k"
graph LR
    A[Fluid Inlet]
    --> B[Impeller]
    --> C[High Velocity]
    --> D[High Pressure]
```

---

# Compressors

Compressors increase the pressure of gases.

Applications:

* Refrigeration
* Air conditioning
* Aircraft engines
* Gas pipelines

```mermaid id="n4yr6v"
graph TD
    A[Low Pressure Gas]
    --> B[Compressor]
    --> C[High Pressure Gas]
```

---

# Fans and Blowers

Both devices move air.

### Fan

Produces a small pressure rise.

Examples:

* Ceiling fan
* Cooling fan

---

### Blower

Produces a larger pressure rise than a fan.

Examples:

* Industrial ventilation systems
* Furnaces

---

# Velocity Triangles

Velocity triangles help analyze fluid flow through turbomachines.

```mermaid id="d7uq5r"
graph TD
    A[Absolute Velocity]
    --> D[Velocity Triangle]

    B[Blade Velocity]
    --> D

    C[Relative Velocity]
    --> D
```

These triangles are used to:

* Calculate work done
* Design blades
* Predict performance

---

# Specific Speed

Specific speed helps select the appropriate turbomachine.

[
N_s
===

\frac{N\sqrt{P}}
{H^{5/4}}
]

Where:

* (N) = Rotational speed
* (P) = Power
* (H) = Head

---

# Cavitation

Cavitation occurs when fluid pressure drops below vapor pressure.

Tiny vapor bubbles form and collapse violently.

```mermaid id="c8wx1j"
graph LR
    A[Low Pressure]
    --> B[Vapor Bubbles]
    --> C[Bubble Collapse]
    --> D[Damage]
```

---

## Effects of Cavitation

❌ Noise

❌ Vibration

❌ Reduced efficiency

❌ Surface damage

---

## Prevention

* Proper pump design
* Increase inlet pressure
* Reduce operating speed
* Maintain adequate NPSH

---

# Turbomachinery in Power Plants

```mermaid id="t5md9z"
graph TD
    A[Energy Source]
    --> B[Turbine]
    --> C[Shaft Power]
    --> D[Generator]
    --> E[Electricity]
```

Examples:

* Hydroelectric plants
* Thermal plants
* Nuclear plants
* Wind farms

---

# Applications of Turbomachinery

## ⚡ Power Generation

Steam, gas, hydro, and wind turbines.

---

## 💧 Water Supply Systems

Pumps transport water over long distances.

---

## ✈️ Aerospace Engineering

Jet engines use compressors and turbines.

---

## 🏭 Industrial Processes

Fans, pumps, and compressors are widely used.

---

## ❄ HVAC Systems

Air conditioning and ventilation systems rely on turbomachinery.

---

# Real-Life Examples

### Hydroelectric Dam

Water drives turbines that generate electricity.

---

### Aircraft Engine

Compressors and turbines work together to produce thrust.

---

### Water Pump

Used to lift water from wells and reservoirs.

---

### Wind Turbine

Converts wind energy into electrical energy.

---

# Advantages of Turbomachinery

✅ High efficiency

✅ Continuous operation

✅ Large power handling capability

✅ Reliable performance

✅ Suitable for industrial applications

---

# Limitations

❌ Cavitation problems

❌ Maintenance requirements

❌ High initial cost

❌ Performance losses due to friction

---

# 📋 Summary

| Machine    | Energy Conversion                       |
| ---------- | --------------------------------------- |
| Turbine    | Fluid → Mechanical                      |
| Pump       | Mechanical → Fluid                      |
| Compressor | Mechanical → Gas Pressure               |
| Fan        | Mechanical → Air Movement               |
| Blower     | Mechanical → Moderate Pressure Increase |

---

# 🎯 Key Takeaways

* Turbomachinery deals with energy transfer between fluids and rotating machines.
* Turbines extract energy from fluids, while pumps and compressors add energy to fluids.
* Euler's Turbomachine Equation is the fundamental governing equation.
* Hydraulic turbines generate power from water.
* Centrifugal pumps are the most widely used pumps in industry.
* Compressors increase gas pressure for various engineering applications.
* Cavitation is a major operational issue that must be prevented.
* Turbomachinery is essential in power generation, aerospace, water supply, and industrial systems.
