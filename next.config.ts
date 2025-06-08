import type { NextConfig } from "next";
import type { Configuration } from 'webpack';

const nextConfig = {
  webpack: (config: Configuration) => {
    config.externals = {
      ...(config.externals as Record<string, string> || {}),
      canvas: 'canvas'
    };
    return config;
  },
}

module.exports = nextConfig