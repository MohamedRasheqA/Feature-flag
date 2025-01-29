import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Heart, Share2, MessageCircle } from 'lucide-react';

// First, let's create our feature flags (this would normally be in lib/flags.ts)
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

// Main component
const FeatureFlaggedUI = async () => {
  const showSocialFeatures = await socialFeaturesFlag();
  const showBetaFeatures = await betaFeaturesFlag();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Product Dashboard</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Main Product Card - Always Visible */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Premium Workspace</CardTitle>
            <CardDescription>Your primary workspace environment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600">Access all your essential tools and features in one place</p>
              <div className="flex gap-2">
                <Badge variant="secondary">Professional</Badge>
                <Badge variant="outline">Active</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="default">Launch Workspace</Button>
            <Button variant="outline">Settings</Button>
          </CardFooter>
        </Card>

        {/* Social Features Card - Visible to 50% */}
        {showSocialFeatures && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Social Hub</CardTitle>
              <CardDescription>Connect with your team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Chat
                  </Button>
                  <Button variant="outline" className="flex gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex gap-2">
                    <Heart className="h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="outline" className="flex gap-2">
                    <Bell className="h-4 w-4" />
                    Notify
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Beta Features Section - Visible to 50% */}
      {showBetaFeatures && (
        <div className="mt-8">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle>Beta Features</CardTitle>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  New
                </Badge>
              </div>
              <CardDescription>Try our latest experimental features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-white">
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm">AI Assistant</CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4">
                      <Button size="sm" variant="secondary">Try Now</Button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm">Smart Analytics</CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4">
                      <Button size="sm" variant="secondary">Preview</Button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm">Custom Themes</CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4">
                      <Button size="sm" variant="secondary">Explore</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default FeatureFlaggedUI;