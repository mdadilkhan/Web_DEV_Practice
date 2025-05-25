const { nanoid } = require("nanoid");
const { sendMessage } = require("../kafka/producer");

const sendOrder = async (orderPayload) => {
  const order = {
    id: nanoid(),
    ...orderPayload,
    createdAt: new Date().toISOString(),
  };

  await sendMessage("orders.created", order.id, order);

  return order;
};

module.exports = sendOrder;
