export const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-US").format(
    new Date(parseInt(dateString))
  );
};
