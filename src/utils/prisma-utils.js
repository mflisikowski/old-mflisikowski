export const serializeDateTimeObject = (date) => new Date(date).toISOString();

export const serialize = (data) => {
  const isArrayIncoming = Array.isArray(data);

  if (isArrayIncoming) {
    return data.map((object) => ({
      ...object,
      updated_at: serializeDateTimeObject(object.updated_at),
      created_at: serializeDateTimeObject(object.created_at),
    }));
  }

  return {
    ...data,
    updated_at: serializeDateTimeObject(data.updated_at),
    created_at: serializeDateTimeObject(data.created_at),
  };
};
