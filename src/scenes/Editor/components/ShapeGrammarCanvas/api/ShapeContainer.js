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

class ShapeContainer {
    constructor(shapeId, transformations, position) {
        this.shapeId = shapeId;
        this.transformations = transformations;
        this.position = position;
    }
}