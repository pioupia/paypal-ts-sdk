import {
    SubscriptionsPlanBuilderProps,
    SubscriptionsPlanJSON, SubscriptionsPlansListJSON,
    SubscriptionsPlansListProps
} from "../types/Subscriptions";
import requestManager from "../Manager/RequestManager";

export function createSubscriptionPlan(subscription: SubscriptionsPlanBuilderProps<'JSON'>): Promise<SubscriptionsPlanJSON> {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await requestManager('v1/billing/plans', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subscription)
            });
            return resolve(res);
        } catch (error) {
            reject(error);
        }
    });
}

export function listSubscriptionPlan(params?: Partial<SubscriptionsPlansListProps>): Promise<SubscriptionsPlansListJSON> {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await requestManager('v1/billing/plans', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                query: {
                    product_id: typeof params?.productId === 'string' ? params.productId : params?.productId?.toJSON().id,
                    plan_ids: typeof params?.planIds === 'string' ? params.planIds : params?.planIds?.id,
                    page: params?.page,
                    page_size: params?.pageSize,
                    total_required: params?.totalRequired
                }
            });
            return resolve(res);
        } catch (error) {
            reject(error);
        }
    });
}