import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "0cr838y2",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-08-31",
    token: "skIwiRtAa56fscMy4Hairiay84b1KcaNCVpUDA5vsQHTduaaNBVHoanyAQ5471WXcIHDwmnsL12vO2Yt6CFIjcAx1OZcV7XSGmmecopiCqVN3XxQXskTU5kdihF25cg4FYGDD3JbObU3DY4t1vsNd7f67PcHu2xmBjrkQqgJsRTAzdLVA9nA",
});

const builder = imageUrlBuilder(client);

export const imageBuilder = (img) => builder.image(img).url();
