import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { OpenWeatherMap, GenericWeather } from '../src';

storiesOf('React Weather', module)
  .add('OpenWeatherMap', () => (
    <OpenWeatherMap city="Jerusalem" country="IL" />
  ))
  .add('GenericWeather', () => (
    <GenericWeather />
  ));
