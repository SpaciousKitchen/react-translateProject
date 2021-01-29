import {
  DEFAULT_CONGRATULATIONS_END,
  DEFAULT_CONGRATULATIONS_START,
  DEFAULT_CONGRATULATIONS_MIDDLE,
  DEFAULT_ASKING_START,
  DEFAULT_ASKING_MIDDLE,
  DEFAULT_ASKING_END,
  DEFAULT_PAYMENT_START,
  DEFAULT_PAYMENT_MIDDLE,
  DEFAULT_PAYMENT_END,
  DEFAULT_RECOMMEND_START,
  DEFAULT_RECOMMEND_MIDDLE,
  DEFAULT_RECOMMEND_END,
  DEFAULT_THANKS_START,
  DEFAULT_THANKS_MIDDLE,
  DEFAULT_THANKS_END,
} from "../config";

export const init = {
  loadtranslateSimplerequest: false,
  loadtranslateSimplesuccess: false,
  loadtranslateSimplefailure: false,

  translateSimplerequest: false,
  translateSimplesuccess: false,
  translateSimplefailure: false,

  removeSimplerequest: false,
  removeSimplesuccess: false,
  removeSimplefailure: false,

  translateTemplaterequest: false,
  translateTemplatesuccess: false,
  translateTemplatefailure: false,

  simple: [],
  template: {
    1: {
      id: null,
      inputStart: DEFAULT_CONGRATULATIONS_START,
      inputMiddle: DEFAULT_CONGRATULATIONS_MIDDLE,
      inputEnd: DEFAULT_CONGRATULATIONS_END,
      output: null,
    },
    2: {
      id: null,
      inputStart: DEFAULT_ASKING_START,
      inputMiddle: DEFAULT_ASKING_MIDDLE,
      inputEnd: DEFAULT_ASKING_END,
      output: null,
    },
    3: {
      id: null,
      inputStart: DEFAULT_RECOMMEND_START,
      inputMiddle: DEFAULT_RECOMMEND_MIDDLE,
      inputEnd: DEFAULT_RECOMMEND_END,
      output: null,
    },
    4: {
      id: null,
      inputStart: DEFAULT_PAYMENT_START,
      inputMiddle: DEFAULT_PAYMENT_MIDDLE,
      inputEnd: DEFAULT_PAYMENT_END,
      output: null,
    },
    5: {
      id: null,
      inputStart: DEFAULT_THANKS_START,
      inputMiddle: DEFAULT_THANKS_MIDDLE,
      inputEnd: DEFAULT_THANKS_END,
      output: null,
    },
  },
};

export const LOAD_TRANSLATE_SIMPLE_REQUEST = "LOAD_TRANSLATE_SIMPLE_REQUEST";
export const LOAD_TRANSLATE_SIMPLE_SUCCESS = "LOAD_TRANSLATE_SIMPLE_SUCCESS";
export const LOAD_TRANSLATE_SIMPLE_FAILURE = "LOAD_TRANSLATE_SIMPLE_FAILURE";

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
    case LOAD_TRANSLATE_SIMPLE_REQUEST: {
      return {
        ...state,
        loadtranslateSimplerequest: true,
        loadtranslateSimplesuccess: false,
        loadtranslateSimplefailure: false,
      };
    }
    case LOAD_TRANSLATE_SIMPLE_SUCCESS: {
      return {
        ...state,
        loadtranslateSimplerequest: false,
        loadtranslateSimplesuccess: true,
        loadtranslateSimplefailure: false,
        simple: action.data,
      };
    }
    case LOAD_TRANSLATE_SIMPLE_FAILURE: {
      return {
        ...state,
        loadtranslateSimplerequest: false,
        loadtranslateSimplesuccess: false,
        loadtranslateSimplefailure: action.error,
      };
    }
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
          { id: action.id, input: action.input, output: action.output },
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
          obj["1"].id = action.id;
          obj["1"].output = action.output;

          break;
        case 2:
          obj["2"].id = action.id;
          obj["2"].output = action.output;
          break;

        case 3:
          obj["3"].id = action.id;
          obj["3"].output = action.output;
          break;

        case 4:
          obj["4"].id = action.id;
          obj["4"].output = action.output;
          break;
        case 5:
          obj["5"].id = action.id;
          obj["5"].output = action.output;
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
      return {
        ...state,
        removeSimplerequest: true,
        removeSimplesuccess: false,
        removeSimplefailure: false,
      };
    }
    case REMOVE_SIMPLE_SUCCESS: {
      state.simple.shift((v) => v.id !== action.id);
      return {
        ...state,
        removeSimplerequest: false,
        removeSimplesuccess: true,
        removeSimplefailure: false,
      };
    }
    case REMOVE_SIMPLE_FAILURE: {
      return {
        ...state,
        removeSimplerequest: false,
        removeSimplesuccess: false,
        removeSimplefailure: action.error,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
