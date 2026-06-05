# ⚠️ Failure Theories

Machine components are often subjected to multiple stresses at the same time. A
shaft may experience bending and torsion simultaneously, while a pressure vessel
may experience stresses in multiple directions.

Failure theories help engineers predict whether a component will fail under
complex loading conditions and determine safe design limits.

---

# 🎯 Why Do We Need Failure Theories?

In practical applications:

- Components rarely experience a single stress.
- Multiple stresses act simultaneously.
- Simple tensile test results cannot directly predict failure.

Failure theories provide a method to compare complex stress states with material
strength.

---

# Example

Consider a transmission shaft.

It experiences:

- Bending Stress
- Torsional Stress

```mermaid
flowchart TD
A[Shaft]
A --> B[Bending Stress]
A --> C[Torsional Stress]
B --> D[Combined Stress State]
C --> D
D --> E[Failure Theory Analysis]
```

Without failure theories, safe design would be difficult.

---

# 📊 Classification of Materials

Before studying failure theories, materials are classified into two categories.

## Ductile Materials

Materials that undergo significant plastic deformation before fracture.

Examples:

- Mild Steel
- Aluminum
- Copper

Characteristics:

✅ High toughness

✅ Large deformation before failure

---

## Brittle Materials

Materials that fracture with little or no plastic deformation.

Examples:

- Cast Iron
- Glass
- Ceramics

Characteristics:

❌ Sudden fracture

❌ Little warning before failure

---

# Why Different Theories?

Different materials fail differently.

```mermaid
flowchart LR
A[Material]
A --> B[Ductile]
A --> C[Brittle]
B --> D[Distortion Energy Theory]
B --> E[Maximum Shear Stress Theory]
C --> F[Maximum Principal Stress Theory]
C --> G[Mohr Theory]
```

---

# Principal Stresses

When a component is loaded, stresses can be transformed into principal stresses.

These are:

- Maximum Principal Stress (σ₁)
- Intermediate Principal Stress (σ₂)
- Minimum Principal Stress (σ₃)

```mermaid
graph LR
A[Complex Stress State]
--> B[Principal Stresses]
B --> C[σ₁]
B --> D[σ₂]
B --> E[σ₃]
```

Most failure theories use principal stresses.

---

# 1️⃣ Maximum Principal Stress Theory

### (Rankine Theory)

This theory states:

Failure occurs when the maximum principal stress reaches the material's ultimate
strength.

---

## Criterion

Failure occurs if:

```
σ₁ ≥ σ_allowable
```

---

# Assumptions

- Material fails due to normal stress.
- Shear effects are neglected.

---

# Suitable For

✅ Brittle Materials

Examples:

- Cast Iron
- Concrete
- Glass

---

# Advantages

- Simple
- Easy calculations

---

# Limitations

- Not suitable for ductile materials.
- Ignores shear stress effects.

---

# 2️⃣ Maximum Shear Stress Theory

### (Guest-Tresca Theory)

One of the most widely used theories for ductile materials.

This theory states:

Failure occurs when maximum shear stress equals the shear stress at yielding.

---

## Criterion

Maximum shear stress:

:contentReference[oaicite:0]{index=0}

Yielding occurs when:

```
τmax ≥ τyield
```

---

# Physical Meaning

Yielding begins because of shear deformation inside the material.

---

# Suitable For

✅ Ductile Materials

Examples:

- Steel shafts
- Bolts
- Machine frames

---

# Advantages

- Simple
- Conservative design

---

# Limitations

- Can overestimate failure in some cases.

---

# 3️⃣ Maximum Strain Theory

### (Saint-Venant Theory)

This theory states:

Failure occurs when maximum strain reaches the strain at failure in a tensile
test.

---

# Criterion

Based on:

- Normal stress
- Poisson's ratio effects

---

# Applications

Historically important but rarely used today.

---

# Limitations

- Less accurate than modern theories.

---

# 4️⃣ Total Strain Energy Theory

### (Haigh Theory)

According to this theory:

Failure occurs when total strain energy reaches the strain energy at yield.

---

# Energy Components

Total energy includes:

- Normal stress energy
- Shear stress energy

---

# Advantages

- Better than maximum strain theory.

---

# Limitations

- Less accurate than distortion energy theory.

---

# 5️⃣ Distortion Energy Theory

### (Von Mises Theory)

This is the most commonly used failure theory in modern machine design.

It states:

Failure occurs when distortion energy reaches the distortion energy at yielding.

---

# Von Mises Equivalent Stress

For a two-dimensional stress state:

:contentReference[oaicite:1]{index=1}

---

# Failure Criterion

```
σv ≥ Yield Strength
```

---

# Suitable For

✅ Ductile Materials

Examples:

- Shafts
- Pressure vessels
- Automotive components
- Aircraft structures

---

# Advantages

- Highly accurate
- Widely accepted
- Used in Finite Element Analysis (FEA)

---

# Why Engineers Prefer Von Mises Theory

```mermaid
flowchart LR
A[Multiple Stresses]
--> B[Equivalent Stress]
--> C[Compare With Yield Strength]
--> D[Safe or Failure]
```

It converts a complex stress state into a single equivalent stress.

---

# 6️⃣ Coulomb-Mohr Theory

Used mainly for brittle materials.

This theory accounts for:

- Different tensile strengths
- Different compressive strengths

---

# Suitable For

✅ Cast Iron

✅ Ceramics

✅ Concrete

---

# Advantages

- More realistic for brittle materials.

---

# Comparison of Failure Theories

| Theory                        | Material Type | Accuracy  | Usage          |
| ----------------------------- | ------------- | --------- | -------------- |
| Maximum Principal Stress      | Brittle       | Moderate  | Common         |
| Maximum Shear Stress (Tresca) | Ductile       | Good      | Machine Design |
| Maximum Strain                | Limited       | Low       | Rare           |
| Total Strain Energy           | Moderate      | Moderate  | Limited        |
| Distortion Energy (Von Mises) | Ductile       | Excellent | Most Popular   |
| Coulomb-Mohr                  | Brittle       | Good      | Brittle Design |

---

# 📈 Failure Theory Selection Guide

```mermaid
flowchart TD
A[Material Type?]
A --> B[Ductile]
A --> C[Brittle]

B --> D[Tresca Theory]
B --> E[Von Mises Theory]

C --> F[Rankine Theory]
C --> G[Coulomb-Mohr Theory]
```

---

# 🏭 Practical Applications

## Shafts

Loading:

- Bending
- Torsion

Preferred Theory:

✅ Von Mises

✅ Tresca

---

## Bolts

Loading:

- Tension
- Shear

Preferred Theory:

✅ Tresca

---

## Pressure Vessels

Loading:

- Multi-axial stress

Preferred Theory:

✅ Von Mises

---

## Cast Iron Components

Loading:

- Brittle behavior

Preferred Theory:

✅ Rankine

✅ Coulomb-Mohr

---

## Automotive Components

Examples:

- Axles
- Suspension arms
- Steering components

Preferred Theory:

✅ Von Mises

---

# ⚠️ Factors Affecting Failure

Even if theoretical calculations show safety, failure can still occur because
of:

- Fatigue
- Corrosion
- Wear
- Manufacturing defects
- Stress concentration
- Temperature effects

Therefore, engineers use:

- Factor of Safety
- Fatigue analysis
- Experimental testing

along with failure theories.

---

# 🛡️ Factor of Safety

Safe design requires:

```
Factor of Safety = Failure Strength / Working Stress
```

The chosen failure theory is used to calculate the working stress.

---

# 📝 Key Points

- Failure theories predict component failure under combined stresses.
- Different theories are used for ductile and brittle materials.
- Rankine Theory is commonly used for brittle materials.
- Tresca Theory is based on maximum shear stress.
- Von Mises Theory is based on distortion energy and is the most widely used
  theory for ductile materials.
- Failure theories simplify complex stress states into safe design criteria.
- Modern machine design and FEA software primarily use Von Mises stress.
- Proper failure theory selection is essential for safe and economical machine
  design.
