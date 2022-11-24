export const MAX_POINTS = 10000;
export const MAX_CIRCLE = 48;
export const MIN_DIS = 0.1;
export const ES = 1.0e-6;
export const DiaP = 0.01;
export const PROFILE = {
	none: 0,
	rect: 1,
	polyGon: 2,
	circle: 3,
	halfCircle: 4,
};
export const CATEGORY = {
	buildingProxy: 0,
	slab: 1,
	wall: 2,
	beam: 3,
	column: 4,
};
export const CustomType = {
	point: 0,
	line: 1,
	arc: 2,
	model: 3,
	filter: (mesh, type) => {
		if (!mesh || !mesh.userData.Type) return false;
		return mesh.userData.Type == type;
	},
	isPoint: (mesh) => {
		return CustomType.filter(mesh, CustomType.point);
	},
	isLine: (mesh) => {
		return CustomType.filter(mesh, CustomType.line);
	},
	isArc: (mesh) => {
		return CustomType.filter(mesh, CustomType.arc);
	},
	isModel: (mesh) => {
		return CustomType.filter(mesh, CustomType.model);
	},
};