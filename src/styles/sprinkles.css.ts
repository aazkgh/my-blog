import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { sys } from './theme.css';

const properties = defineProperties({
  properties: {
    fontSize: sys.size,
    color: sys.color,
    background: sys.color,
  },
});

export const sprinkles = createSprinkles(properties);