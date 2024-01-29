export const addSearchParamsToUrl = (
  url: string,
  params: Record<string, string>
): string => {
  const urlObj = new URL(url);

  // Add each parameter to the URL object
  Object.keys(params).forEach((key) => {
    if (params[key]) urlObj.searchParams.set(key, params[key]);
  });

  // Convert the URL object back to a string with updated search parameters
  return urlObj.toString();
};
