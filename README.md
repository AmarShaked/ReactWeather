![Alt text](https://raw.githubusercontent.com/AmarShaked/ReactWeather/master/widget.png?raw=true "React Weather")

# ReactWeather
Minimalistic react weather component.


### Installing
Install via npm:
```
npm install react-weather --save
```

### Quick Example
This example shows how to use the GenericWeather component.
The component display static data via props.
``` javascript
import ReactDOM from 'react-dom';
import { GenericWeather } from 'react-weather';


ReactDOM.render(
  <GenericWeather city="Jerusalem" temp=17.61 status="sun" />,
  document.getElementById('root')
)
```
