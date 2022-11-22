import { LineBasicMaterial, MeshNormalMaterial, DoubleSide, MeshBasicMaterial } from "three";
import { LightColor } from "./LightColor";
export const customMaterial = {
	normalLine: new MeshBasicMaterial({
		transparent: true,
		opacity: 1,
		color: "black",
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),
	hoverLine: new LineBasicMaterial({
		transparent: true,
		opacity: 1,
		color: 0x075eeb,
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),
	normalModel: new MeshBasicMaterial({
		transparent: true,
		opacity: 1,
		color: 0x8a867c,
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),
	selectModel: new MeshBasicMaterial({
		transparent: true,
		opacity: 1,
		color: 0xf10cf5,
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),
	hoverModel: new MeshBasicMaterial({
		transparent: true,
		opacity: 1,
		color: 0x9e1e05,
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),
	hoverFace: new MeshBasicMaterial({
		transparent: true,
		opacity: 0.1,
		color: 0x075eeb,
		side: DoubleSide,
		depthWrite: true,
		depthTest: true,
	}),
};