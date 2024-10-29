import {finishLoading, startLoading} from './loaderSlice';

const serviceRequest = async serviceRequestProps => {
  const {options, dispatch, serviceMethod, payload} = serviceRequestProps;
  try {
    if (!options.skipLoader) {
      dispatch(startLoading());
    }
    const serviceRequestResponse = await serviceMethod(payload);
    return serviceRequestResponse;
  } catch {
  } finally {
    if (!options.skipLoader) {
      dispatch(finishLoading());
    }
  }
};

export default serviceRequest;
