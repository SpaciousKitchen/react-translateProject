export const init = {
  translateSimplerequest: false,
  translateSimplesuccess: false,
  translateSimplefailure: false,

  translateTemplaterequest: false,
  translateTemplatesuccess: false,
  translateTemplatefailure: false,
  simple: [],
  template: {
    Pay: null,
    Promotion: null,
    Thanks: null,
    Request: null,
    Greeting: null,
  },
};

export const TRANSLATE_SIMPLE_REQUEST = "TRANSLATE_SIMPLE_REQUEST";
export const TRANSLATE_SIMPLE_SUCCESS = "TRANSLATE_SIMPLE_SUCCESS";
export const TRANSLATE_SIMPLE_FAILURE = "TRANSLATE_SIMPLE_FAILURE";

export const TRANSLATE_TEMPLATE_REQUEST = "TRANSLATE_TEMPLATE_REQUEST";
export const TRANSLATE_TEMPLATE_SUCCESS = "TRANSLATE_TEMPLATE_SUCCESS";
export const TRANSLATE_TEMPLATE_FAILURE = "TRANSLATE_TEMPLATE_FAILURE";

export default (state = init, action) => {
  switch (action.type) {
    case TRANSLATE_SIMPLE_REQUEST: {
      return {
        ...state,
        translateSimplerequest: true,
        translateSimplesuccess: false,
        translateSimplefailure: false,
      };
    }
    case TRANSLATE_SIMPLE_SUCCESS: {
      return {
        ...state,
        translateSimplerequest: false,
        translateSimplesuccess: true,
        translateSimplefailure: false,

        simple: [
          { id: action.id, Input: action.Input, Output: action.Output },
          ...state.simple,
        ],
      };
    }
    case TRANSLATE_SIMPLE_FAILURE: {
      return {
        ...state,
        templaterequest: false,
        templatesuccess: false,
        templatefailure: true,
      };
    }
    case TRANSLATE_TEMPLATE_REQUEST: {
      return {
        ...state,
        templateTemplaterequest: true,
        templateTemplatesuccess: false,
        templateTemplatefailure: false,
      };
    }
    case TRANSLATE_TEMPLATE_SUCCESS: {
      const obj = state.template;
      obj.Pay = { id: action.id, Input: action.Input, Output: action.Output };

      return {
        ...state,
        templateTemplaterequest: false,
        templateTemplatesuccess: true,
        templateTemplatefailure: true,
        template: obj,
      };
    }
    case TRANSLATE_TEMPLATE_FAILURE: {
      return {
        ...state,
        translateTemplaterequest: false,
        translateTemplatesuccess: false,
        translateTemplatefailure: true,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
