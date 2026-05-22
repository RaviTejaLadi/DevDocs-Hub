import type { TopicItem } from '@/data/topics';
import physicsIntroduction from './introduction.md?raw';
import unitsAndMeasurements from './units-and-measurements.md?raw';
import kinematics from './kinematics.md?raw';
import newtonLaws from './newton-laws.md?raw';
import workEnergy from './work-energy.md?raw';
import rotationalMotion from './rotational-motion.md?raw';
import gravitation from './gravitation.md?raw';
import propertiesOfMatter from './properties-of-matter.md?raw';
import heatAndTemperature from './heat-and-temperature.md?raw';
import wavesAndSound from './waves-and-sound.md?raw';
import optics from './optics.md?raw';
import electromagnetism from './electromagnetism.md?raw';
import modernPhysics from './modern-physics.md?raw';
import semiconductors from './semiconductors.md?raw';

export const physicsTopics: TopicItem[] = [
  {
    id: 'physics-mechanics',
    title: '⚙️ Mechanics',
    content: '',
    items: [
      { id: 'physics-introduction', title: '📖 Introduction to Physics', content: physicsIntroduction },
      { id: 'physics-units-and-measurements', title: '📏 Units & Measurements', content: unitsAndMeasurements },
      { id: 'physics-kinematics', title: '🏃 Kinematics', content: kinematics },
      { id: 'newton-laws', title: "📐 Newton's Laws of Motion", content: newtonLaws },
      { id: 'work-energy', title: '⚡ Work, Energy & Power', content: workEnergy },
      { id: 'physics-rotational-motion', title: '🔄 Rotational Motion', content: rotationalMotion },
      { id: 'physics-gravitation', title: '🌍 Gravitation', content: gravitation },
      { id: 'physics-properties-of-matter', title: '🧪 Properties of Matter', content: propertiesOfMatter },
    ],
  },
  {
    id: 'physics-thermal-waves',
    title: '🌡️ Thermal & Waves',
    content: '',
    items: [
      { id: 'physics-heat-and-temperature', title: '🔥 Heat & Temperature', content: heatAndTemperature },
      { id: 'physics-waves-and-sound', title: '🔊 Waves & Sound', content: wavesAndSound },
      { id: 'physics-optics', title: '🔦 Optics', content: optics },
    ],
  },
  {
    id: 'physics-electromagnetism-modern',
    title: '⚡ Electromagnetism & Modern Physics',
    content: '',
    items: [
      { id: 'electromagnetism', title: '🧲 Electromagnetism', content: electromagnetism },
      { id: 'physics-modern-physics', title: '🔬 Modern Physics', content: modernPhysics },
      { id: 'physics-semiconductors', title: '💡 Semiconductors', content: semiconductors },
    ],
  },
];
