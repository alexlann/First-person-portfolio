import { NearestFilter, RepeatWrapping, TextureLoader } from 'three';
const streetImg = require('./street.jpg');

const groundTexture = new TextureLoader().load(streetImg);

groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

export {
	groundTexture,
} 