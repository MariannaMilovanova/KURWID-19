import bemCn, {BemCn, BemItem, Block, setup} from 'bem-cn';
import {isArray, isEmpty, isString, uniq} from 'lodash';

export type BemModifier = string | boolean | undefined | BemModifier[];

const block: BemCn = setup({
    el: '__',
    mod: '--',
    modValue: ''
});

const createBlock = (parentClass: string): Block => block(parentClass);

const blazeHelper = (
    bemBlock: Block,
    element = '',
    modifier: BemModifier = ''
): BemItem | string => {
    const hasElement = isString(element) && !isEmpty(element) as any;
    const isFewMods = isArray(modifier) && !isEmpty(modifier);
    const hasModifier = (isString(modifier) && !isEmpty(modifier)) || isFewMods;

    if (!hasElement && !hasModifier) {
        return bemBlock();
    }

    if (hasModifier && !isFewMods) {
        // @ts-ignore
        return bemBlock(hasElement ? element : null, {['']: modifier});
    }

    if (hasModifier && isFewMods && isArray(modifier)) {
        return uniq(
            modifier
                // @ts-ignore
                .map((mod): string => bemBlock(hasElement ? element : null, {['']: mod}).toString())
                .join(' ')
                .split(' ')
        ).join(' ');
    }

    return bemBlock(element);
};

const b = (bemBlock: Block, element = '', modifier: BemModifier = ''): string =>
    blazeHelper(bemBlock, element, modifier).toString();

export {createBlock, b, blazeHelper, bemCn};
