# ☀️ Radiation

Radiation is the transfer of heat energy through electromagnetic waves without
requiring any material medium.

Unlike conduction and convection, radiation can occur in a vacuum.

This is how heat from the Sun reaches the Earth across millions of kilometers of
empty space.

### 🌍 Everyday Examples

- Feeling warmth from sunlight.
- Heat felt near a bonfire.
- Electric room heaters.
- Infrared cooking ovens.
- Hot objects glowing red at high temperatures.

## 🎯 How Radiation Works

All objects with a temperature above absolute zero (-273.15°C) emit thermal
radiation.

The hotter the object, the more radiation it emits.

\`\`\`mermaid flowchart LR A[Hot Object 🔥] --> B[Electromagnetic Waves] -->
C[Cold Object ❄️] \`\`\`

Energy travels through space as electromagnetic waves and is absorbed by another
surface.

## 🌈 Electromagnetic Spectrum

Thermal radiation is primarily emitted in the infrared region of the
electromagnetic spectrum.

\`\`\`mermaid flowchart LR A[Gamma Rays] --> B[X-Rays] --> C[Ultraviolet] -->
D[Visible Light] --> E[Infrared] --> F[Microwaves] --> G[Radio Waves] \`\`\`

Most heat transfer by radiation occurs through infrared waves.

## 🌞 Why Radiation Does Not Need a Medium

Conduction requires direct contact.

Convection requires fluid motion.

Radiation uses electromagnetic waves, so it can travel through:

- Vacuum
- Air
- Gases
- Transparent materials

Example:

The Sun's heat reaches Earth through the vacuum of space.

## ⚫ Black Body

A black body is an ideal surface that:

- Absorbs all incoming radiation.
- Reflects no radiation.
- Emits maximum possible radiation.

### Characteristics

✅ Perfect absorber

✅ Perfect emitter

✅ Theoretical reference surface

Real surfaces behave approximately like black bodies.

## ⚪ Gray Body

Most engineering surfaces are gray bodies.

They:

- Absorb part of incoming radiation.
- Reflect part of incoming radiation.
- Emit less radiation than a black body.

Examples:

- Metal surfaces
- Walls
- Machinery
- Pipes

## 📏 Stefan-Boltzmann Law

The total radiation emitted by a black body is given by:

:contentReference[oaicite:0]{index=0}

Where:

- Q = Radiated energy per second (W)
- σ = Stefan-Boltzmann constant
- A = Surface area (m²)
- T = Absolute temperature (K)

### Important Observation

Radiation depends on the fourth power of temperature.

This means:

- Small temperature increases can cause large increases in radiation heat
  transfer.

## 🌡️ Radiation Between Two Surfaces

For practical engineering systems:

\`\`\` Q = εσA(T₁⁴ - T₂⁴) \`\`\`

Where:

- ε = Emissivity
- T₁ = Surface temperature
- T₂ = Surrounding temperature

Heat flows from the hotter surface to the cooler surface.

## ✨ Emissivity (ε)

Emissivity indicates how effectively a surface emits thermal radiation.

Its value ranges from 0 to 1.

### Typical Values

| Surface           | Emissivity |
| ----------------- | ---------- |
| Black Paint       | 0.95       |
| Brick             | 0.90       |
| Concrete          | 0.88       |
| Human Skin        | 0.97       |
| Polished Aluminum | 0.04       |
| Polished Silver   | 0.02       |

### Observation

Dark surfaces:

- High emissivity
- Better absorbers
- Better emitters

Shiny surfaces:

- Low emissivity
- Poor emitters
- Good reflectors

## 🌞 Radiation Properties

### Absorptivity (α)

Fraction of incoming radiation absorbed.

### Reflectivity (ρ)

Fraction reflected.

### Transmissivity (τ)

Fraction transmitted through a material.

Relationship:

\`\`\` α + ρ + τ = 1 \`\`\`

For opaque surfaces:

\`\`\` α + ρ = 1 \`\`\`

## 🏭 Engineering Applications

### Solar Panels

Convert solar radiation into electrical energy.

### Solar Water Heaters

Use solar radiation to heat water.

### Furnaces

High-temperature heat transfer mainly occurs by radiation.

### Spacecraft Design

Radiation is the primary heat transfer mode in space.

### Infrared Thermometers

Measure temperature using emitted radiation.

### Thermal Insulation

Reflective coatings reduce radiation heat loss.

## 🌡️ Comparison with Other Modes

| Feature          | Conduction | Convection   | Radiation             |
| ---------------- | ---------- | ------------ | --------------------- |
| Requires Medium  | Yes        | Yes          | No                    |
| Requires Contact | Yes        | No           | No                    |
| Works in Vacuum  | No         | No           | Yes                   |
| Heat Carrier     | Molecules  | Fluid Motion | Electromagnetic Waves |

## 🔄 Combined Heat Transfer Example

Consider a hot cup of coffee:

### Conduction

Heat moves through the cup wall.

### Convection

Heat transfers from cup surface to surrounding air.

### Radiation

Cup emits infrared radiation to surroundings.

\`\`\`mermaid flowchart TB Coffee[Hot Coffee ☕] --> Conduction[Conduction
Through Cup] --> Convection[Convection To Air] --> Radiation[Radiation To
Surroundings] \`\`\`

In real systems, all three modes often occur simultaneously.

## 📌 Key Points

✅ Radiation transfers heat through electromagnetic waves

✅ No material medium is required

✅ Radiation can occur in vacuum

✅ All objects above absolute zero emit radiation

✅ Black bodies emit maximum radiation

✅ Radiation heat transfer increases rapidly with temperature

✅ Stefan-Boltzmann Law governs thermal radiation

✅ Solar energy reaches Earth through radiation
