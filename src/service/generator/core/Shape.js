/**
 * actual shape, with svg content
 * 
 * - #id
 * - data (svg)
 * - hasOverlay (boolean) -> detects if shape can be overlayed by another
 */

class Shape {

    constructor(id, data, hasOverlay) {
        this.is = id;
        this.data = data;
        this.hasOverlay = hasOverlay;
    }

}