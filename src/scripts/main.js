import { dropdownMenu } from './sections/1.js';
import { slider, composition } from './sections/3.js';
import { verticalAccordeon } from './sections/4.js';
import { horizontalAccordeon } from './sections/5.js';
import { popups } from './sections/6.js';
import { init } from './sections/8.js';
import { onePageScroll } from './navigation.js';

dropdownMenu();

slider();
composition();

verticalAccordeon();
horizontalAccordeon();

popups();

ymaps.ready(init);

onePageScroll();
