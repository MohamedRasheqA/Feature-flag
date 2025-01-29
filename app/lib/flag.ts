import { flag } from '@vercel/flags/next';

export const socialFeaturesFlag = flag<boolean>({
  key: "social-features",
  decide() {
    return Math.random() > 0.5;
  }
});

export const betaFeaturesFlag = flag<boolean>({
  key: "beta-features",
  decide() {
    return Math.random() > 0.5;
  }
});