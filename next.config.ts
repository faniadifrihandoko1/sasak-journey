import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ik.imgkit.net",
      },
      {
        protocol: "https",
        hostname: "www.itdc.co.id",
      },
      {
        protocol: "https",
        hostname: "australindo.co.id",
      },
      {
        protocol: "https",
        hostname: "backend.destinasian.co.id",
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "paketwisatalombok.id",
      },
      {
        protocol: "https",
        hostname: "only1invillage.com",
      },
      {
        protocol: "https",
        hostname: "finnsbeachclub.com",
      },
      {
        protocol: "https",
        hostname: "zjglidcehtsqqqhbdxyp.supabase.co",
      },
      {
        protocol: "https",
        hostname: "res.klook.com",
      },
      {
        protocol: "https",
        hostname: "tunjungtransport.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "image.idntimes.com",
      },
      {
        protocol: "https",
        hostname: "www.masterplandesa.com",
      },
      {
        protocol: "https",
        hostname: "static.promediateknologi.id",
      },
      {
        protocol: "https",
        hostname: "lombokindotrans.com",
      },
      {
        protocol: "https",
        hostname: "www.weseektravel.com",
      },
      {
        protocol: "https",
        hostname: "travelwiththesmile.com",
      },
      {
        protocol: "https",
        hostname: "www.korinatour.co.id",
      },
      {
        protocol: "https",
        hostname: "thelangkahtravel.com",
      },
      {
        protocol: "https",
        hostname: "jonistravelling.com",
      },
      {
        protocol: "https",
        hostname: "www.expeditieaardbol.nl",
      },
      {
        protocol: "https",
        hostname: "mediaim.expedia.com",
      },
      {
        protocol: "https",
        hostname: "www.eigeradventure.com",
      },
      {
        protocol: "https",
        hostname: "media-cdn.tripadvisor.com",
      },
      {
        protocol: "https",
        hostname: "www.hikingrinjani.com",
      },
      {
        protocol: "https",
        hostname: "authentic-indonesia.com",
      },
      {
        protocol: "https",
        hostname: "s-light.tiket.photos",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "pariwisataindonesia.id",
      },
      {
        protocol: "https",
        hostname: "s3.nevaobjects.id",
      },
      {
        protocol: "https",
        hostname: "gontb.com",
      },
      {
        protocol: "https",
        hostname: "www.rumah123.com",
      },
      {
        protocol: "https",
        hostname: "assets.promediateknologi.id",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "dynamic-media-cdn.tripadvisor.com",
      },
      {
        protocol: "https",
        hostname: "firstlomboktour.com",
      },
      {
        protocol: "https",
        hostname: "www.lazone.id",
      },
      {
        protocol: "https",
        hostname: "www.indonesia.travel",
      },
      {
        protocol: "https",
        hostname: "kemenparekraf.go.id",
      },
      {
        protocol: "https",
        hostname: "cdn.timesmedia.co.id",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
