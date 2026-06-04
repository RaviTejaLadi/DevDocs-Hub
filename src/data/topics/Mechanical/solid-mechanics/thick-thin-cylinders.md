# 🛢️ Thick & Thin Cylinders

Cylinders are commonly used to store fluids under pressure.

Examples include:

- Water tanks
- Gas cylinders
- Boilers
- Pressure vessels
- Hydraulic cylinders
- Air receivers

When internal pressure acts on a cylinder, stresses are developed in its walls.
The analysis of these stresses is an important part of Solid Mechanics.

---

# 🎯 Why Study Cylinders?

Engineers study cylinders to:

- Design safe pressure vessels
- Prevent bursting failures
- Determine wall thickness
- Select suitable materials
- Ensure safe operation under pressure

---

# 📚 Classification of Cylinders

Based on wall thickness, cylinders are classified into:

## 1️⃣ Thin Cylinders

Wall thickness is small compared to diameter.

Condition:

```
t ≤ d/20
```

Where:

- t = Wall Thickness
- d = Internal Diameter

Examples:

- Water tanks
- Air tanks
- Domestic storage vessels

---

## 2️⃣ Thick Cylinders

Wall thickness is relatively large.

Condition:

```
t > d/20
```

Examples:

- Gun barrels
- Hydraulic presses
- High-pressure cylinders
- Pressure reactors

---

# 🏗️ Thin Cylinder

For thin cylinders:

- Stress is assumed uniform across thickness.
- Radial stress is neglected.
- Analysis becomes simple.

```mermaid
graph TD
A[Internal Pressure]
B[Thin Cylinder Wall]
A --> B
```

---

# ⚡ Stresses Developed in Thin Cylinders

Two major stresses are developed:

## Hoop Stress

Also called:

```
Circumferential Stress
```

Acts around the circumference.

---

## Longitudinal Stress

Acts along the axis of the cylinder.

---

# 📊 Hoop Stress

Hoop stress tends to split the cylinder along its length.

```mermaid
graph LR
A[Pressure]
B[Cylinder]
C[Pressure]

A --> B
C --> B
```

It is the most critical stress in thin cylinders.

---

# 📖 Hoop Stress Formula

```
σh = pd / 2t
```

Where:

- σh = Hoop Stress
- p = Internal Pressure
- d = Diameter
- t = Thickness

---

# 📊 Longitudinal Stress

Longitudinal stress tends to separate the cylinder into two parts across a
transverse section.

```mermaid
graph TD
A[Pressure]
B[Cylinder Axis]
C[Pressure]

A --> B
C --> B
```

---

# 📖 Longitudinal Stress Formula

```
σl = pd / 4t
```

Where:

- σl = Longitudinal Stress

---

# 🔍 Relationship Between Stresses

Comparing formulas:

```
σh = pd / 2t
```

```
σl = pd / 4t
```

Therefore:

```
σh = 2σl
```

Important conclusion:

> Hoop stress is twice the longitudinal stress.

Hence cylinder design is generally based on hoop stress.

---

# 📌 Example

Given:

- Pressure = 2 MPa
- Diameter = 1000 mm
- Thickness = 10 mm

Using hoop stress formula:

```
σh = pd / 2t
```

```
σh = (2 × 1000)/(2 × 10)
```

```
σh = 100 MPa
```

Longitudinal stress:

```
σl = pd / 4t
```

```
σl = 50 MPa
```

Result:

```
Hoop Stress = 100 MPa
Longitudinal Stress = 50 MPa
```

---

# 📏 Thin Cylinder Design Formula

Required thickness:

```
t = pd / 2σallow
```

Where:

- σallow = Allowable Stress

Used during pressure vessel design.

---

# 🏗️ Thick Cylinders

When wall thickness becomes large:

```
t > d/20
```

Stress distribution is no longer uniform.

Simple thin-cylinder formulas cannot be used.

---

# ⚡ Stresses in Thick Cylinders

Three stresses exist:

## Hoop Stress

Circumferential stress.

---

## Radial Stress

Acts from center outward.

---

## Longitudinal Stress

Acts along cylinder axis.

---

# 🔍 Radial Stress

Unlike thin cylinders, radial stress becomes significant.

Characteristics:

- Maximum at inner surface
- Minimum at outer surface

```mermaid
graph TD
A[Maximum Radial Stress]
B[Wall Thickness]
C[Minimum Radial Stress]

A --> B
B --> C
```

---

# 📚 Lame's Theory

French engineer Gabriel Lame developed the theory for thick cylinders.

The theory provides stress distribution throughout the wall thickness.

---

# 📖 Lame's Equations

Radial Stress:

```
σr = A - B/r²
```

Hoop Stress:

```
σh = A + B/r²
```

Where:

- A and B are constants
- r = Radius at the point considered

---

# 📊 Stress Distribution in Thick Cylinders

```mermaid
graph TD
A[Inner Surface]
B[Middle Region]
C[Outer Surface]

A --> B
B --> C
```

Characteristics:

### Hoop Stress

- Maximum at inner surface
- Decreases toward outer surface

### Radial Stress

- Maximum internally
- Approaches zero externally

---

# 🚨 Failure of Cylinders

Failure may occur due to:

- Excessive hoop stress
- Yielding of material
- Fatigue
- Corrosion
- Manufacturing defects

Bursting generally starts at the inner surface where stress is highest.

---

# 🏗️ Pressure Vessels

Pressure vessels are containers designed to hold fluids under pressure.

Examples:

- LPG cylinders
- Boilers
- Air receivers
- Chemical reactors

```mermaid
graph LR
A[Pressure Vessel]
B[Stores Fluid Under Pressure]

A --> B
```

---

# 🌍 Applications of Thin Cylinders

- Water tanks
- Air compressors
- Fuel tanks
- Pipelines
- Storage vessels

---

# 🌍 Applications of Thick Cylinders

- Gun barrels
- Hydraulic cylinders
- Nuclear reactors
- High-pressure pumps
- Heavy industrial pressure vessels

---

# 📊 Thin vs Thick Cylinders

| Thin Cylinder             | Thick Cylinder              |
| ------------------------- | --------------------------- |
| t ≤ d/20                  | t > d/20                    |
| Uniform stress assumption | Non-uniform stress          |
| Radial stress neglected   | Radial stress considered    |
| Simple analysis           | Complex analysis            |
| Hoop stress dominant      | Multiple stresses important |

---

# 📝 Important Formulas

Thin Cylinder Hoop Stress:

```
σh = pd / 2t
```

Thin Cylinder Longitudinal Stress:

```
σl = pd / 4t
```

Relationship:

```
σh = 2σl
```

Design Thickness:

```
t = pd / 2σallow
```

Lame's Radial Stress:

```
σr = A - B/r²
```

Lame's Hoop Stress:

```
σh = A + B/r²
```

---

# 🎓 Summary

Cylinders subjected to internal pressure develop stresses within their walls.

For thin cylinders:

- Hoop stress and longitudinal stress are considered.
- Hoop stress is twice the longitudinal stress.

For thick cylinders:

- Stress varies across the thickness.
- Radial stress becomes important.
- Lame's theory is used for analysis.

Understanding thick and thin cylinders is essential for designing safe pressure
vessels, tanks, boilers, pipelines, and hydraulic systems.
