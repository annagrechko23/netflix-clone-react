const { stripe } = require("../utils/stripe")

module.exports = async (email) => {
    const response = await stripe.customers.search({
        query: `email:\'${email}\'`
    })
    if (response.data[0]) {
        const customer = response.data[0];
        const subscription = await stripe.subscriptions.list({
            customer: customer.id,
            expand: ["data.plan.product"]
        })
        if (subscription.data[0]) {
            return subscription.data[0].plan.product
        } else {
            return null
        }
    } else {
        return null
    }
}