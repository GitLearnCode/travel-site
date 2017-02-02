import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/revealOnScroll';
import StickyHeader from './modules/stickyHeader';
import Modal from './modules/modal';

import $ from 'jquery';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "80%");
new RevealOnScroll($(".testimonial"), "70%");
var stickyHeader = new StickyHeader();
const modal = new Modal();
