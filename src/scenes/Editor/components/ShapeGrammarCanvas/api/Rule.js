/**
 * rule for shape grammar
 * 
 * - left side (shapeContainer)
 * - right side (shapeContainer[])
 * 
 * for example looks like this: [ A -> C A B, C -> C A ]
 */

class Rule {

    constructor(left, right, isStartRule, isTerminationRule) {
        this.left = left;
        this.right = right;
        this.isStartRule = isStartRule;
        this.isTerminationRule = isTerminationRule;
    }

}