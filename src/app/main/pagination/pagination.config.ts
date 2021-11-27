export class PaginationConfig {
    isFirstPageDisabled: () => boolean = () => false;

    isPreviousPageDisabled: () => boolean = () => false;

    isNextPageDisabled: () => boolean = () => false;

    isLastPageDisabled: () => boolean = () => false;

    firstPageClickHandler: Function;
    
    previousClickHandler: Function;
    
    nextClickHandler: Function;
    
    lastClickHandler: Function;
}