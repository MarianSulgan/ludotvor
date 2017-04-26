/**
 * container for shape
 * 
 * abstractly represents shape
 * 
 * use: instead of working with shapes, like svg full content,
 * this object has only reference to content, so work with shapes
 * is faster
 * 
 * - #id (hidden)
 * - shapeID
 * - transformations
 * - position ([x, y] format)
 * - free_siblings (info on free neighbour tiles to be filled with shape)
 */

export default class ShapeContainer {

    constructor(obj) {
        if (typeof(obj) === "undefined") {
            this.shapeId = "";
            this.transforms = "";
            this.position = { x: 0, y: 0};
        } else {
            this.shapeId = obj.shapeId;
            this.transforms = obj.transforms;
            this.position = obj.position;
        }
        
    }
}