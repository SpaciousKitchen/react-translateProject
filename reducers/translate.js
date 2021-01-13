export const init = {
  translateSimplerequest: false,
  translateSimplesuccess: false,
  translateSimplefailure: false,

  translateTemplaterequest: false,
  translateTemplatesuccess: false,
  translateTemplatefailure: false,
  simple: [],
  template: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  },
};

export const TRANSLATE_SIMPLE_REQUEST = "TRANSLATE_SIMPLE_REQUEST";
export const TRANSLATE_SIMPLE_SUCCESS = "TRANSLATE_SIMPLE_SUCCESS";
export const TRANSLATE_SIMPLE_FAILURE = "TRANSLATE_SIMPLE_FAILURE";

export const TRANSLATE_TEMPLATE_REQUEST = "TRANSLATE_TEMPLATE_REQUEST";
export const TRANSLATE_TEMPLATE_SUCCESS = "TRANSLATE_TEMPLATE_SUCCESS";
export const TRANSLATE_TEMPLATE_FAILURE = "TRANSLATE_TEMPLATE_FAILURE";

export const REMOVE_SIMPLE_REQUEST = "REMOVE_SIMPLE_REQUEST";
export const REMOVE_SIMPLE_SUCCESS = "REMOVE_SIMPLE_SUCCESS";
export const REMOVE_SIMPLE_FAILURE = "REMOVE_SIMPLE_FAILURE";

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
        translateSimplerequest: false,
        translateSimplesuccess: false,
        translateSimplefailure: true,
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

      switch (action.option) {
        case 1:
          obj["1"] = {
            id: action.id,
            Input: action.Input,
            Output: action.Output,
          };
          break;
        case 2:
          obj["2"] = {
            id: action.id,
            Input: action.Input,
            Output: action.Output,
          };
          break;

        case 3:
          obj["3"] = {
            id: action.id,
            Input: action.Input,
            Output: action.Output,
          };
          break;

        case 4:
          obj["4"] = {
            id: action.id,
            Input: action.Input,
            Output: action.Output,
          };
          break;
        case 5:
          obj["5"] = {
            id: action.id,
            Input: action.Input,
            Output: action.Output,
          };
          break;
        default:
          alert("불가능한 설정입니다.");
          break;
      }

      return {
        ...state,
        templateTemplaterequest: false,
        templateTemplatesuccess: true,
        templateTemplatefailure: false,
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
    case REMOVE_SIMPLE_REQUEST: {
      console.log("remove");

      state.simple.shift((v) => v.id !== action.id);

      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
