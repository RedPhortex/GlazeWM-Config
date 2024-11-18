// Snacked from https://github.com/glzr-io/zebar/blob/v2.1.0/packages/client-api/src/utils/create-logger.ts
const log = (
  subSection: string,
  message: string,
  ...data: any[]
) => {
  const date = new Date();
  const timestamp = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}:${date
    .getMilliseconds()
    .toString()
    .padStart(3, "0")}`;

  console.log(
    `%c${timestamp}%c [frontend] [${subSection}] %c${message}`,
    "color: #f5f9b4",
    "color: #d0b4f9",
    "color: inherit",
    ...data
  );
};

export { log };
