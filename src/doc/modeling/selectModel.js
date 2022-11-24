import { castElement, filterModel, changeCursor } from "./cast";
import { CustomType } from "./enum";

export function highlightModel(event, view) {
	view.scene.children.forEach((child) => {
		if (CustomType.isModel(child)) {
			child.material = child.userData.IsSelect ? child.userData.Select : child.userData.Normal;
		}
	});
	var found = castElement(event, view, filterModel.model(view.scene))[0];
	if (found) {
		changeCursor().pointer(view.domElement);
		view.highlightModel = found.object;
		if (!found.object.userData.IsSelect) {
			found.object.material = view.tabKey ? found.object.userData.Normal : found.object.userData.Hover;
		} else {
			if (view.tabKey) found.object.material = found.object.userData.Normal;
		}
	} else {
		view.highlightModel = null;
		view.tabKey = false;
		changeCursor().default(view.domElement);
	}
}
export function pickModel(event, view) {
	var found = castElement(event, view, filterModel.model(view.scene))[0];
	if (found) {
		changeCursor().pointer(view.domElement);
		found.object.material = found.object.userData.Select;
		found.object.userData.IsSelect = true;
		// for (let i = 0; i < found.object.userData.Edges.length; i++) {
		// 	const edge = found.object.userData.Edges[i];
		// 	edge.visibility(found.object, true);
		// }
		view.selectModel = found.object;
	} else {
		changeCursor().default(view.domElement);
		view.tabKey = false;
		view.selectModel = null;
		view.scene.children.forEach((child) => {
			if (CustomType.isModel(child)) {
				child.userData.IsSelect = false;
				child.material = child.userData.Normal;
				// for (let i = 0; i < child.userData.Edges.length; i++) {
				// 	const edge = child.userData.Edges[i];
				// 	edge.visibility(child, false);
				// }
			}
		});
	}
}