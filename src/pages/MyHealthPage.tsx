import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, Activity, TrendingUp, Thermometer, Weight, Calendar } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from "@/hooks/useLanguage";

const healthData = [
  { date: 'Jan 15', bloodPressure: 120, heartRate: 72, bloodSugar: 110, weight: 70 },
  { date: 'Jan 20', bloodPressure: 118, heartRate: 75, bloodSugar: 105, weight: 69.8 },
  { date: 'Jan 25', bloodPressure: 125, heartRate: 68, bloodSugar: 115, weight: 70.2 },
  { date: 'Jan 30', bloodPressure: 122, heartRate: 70, bloodSugar: 108, weight: 70.0 },
  { date: 'Feb 05', bloodPressure: 119, heartRate: 73, bloodSugar: 112, weight: 69.9 },
];

const MyHealthPage = () => {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gov-navy mb-2">{t("my_health")}</h1>
        <p className="text-muted-foreground">{t("track_health_vitals")}</p>
      </div>

      {/* Current Health Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t("blood_pressure")}</p>
                <p className="text-2xl font-bold text-muted-foreground">--/--</p>
                <span className="text-sm text-muted-foreground">{t("mmhg")}</span>
              </div>
              <Heart className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t("heart_rate")}</p>
                <p className="text-2xl font-bold text-muted-foreground">-- {t("bpm")}</p>
              </div>
              <Activity className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Blood Sugar</p>
                <p className="text-2xl font-bold text-muted-foreground">-- mg/dL</p>
                <Badge variant="secondary" className="mt-1 bg-gray-100 text-gray-600">No data</Badge>
              </div>
              <Thermometer className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t("weight")}</p>
                <p className="text-2xl font-bold text-muted-foreground">-- {t("kg")}</p>
                <Badge variant="secondary" className="mt-1 bg-gray-100 text-gray-600">{t("no_data")}</Badge>
              </div>
              <Weight className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Health Trends Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            {t("health_trends")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 bg-muted/20 rounded-lg">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{t("no_health_data_available")}</p>
              <p className="text-sm text-muted-foreground">{t("start_tracking_health")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Health Goals Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <Activity className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No health goals set yet</p>
              <p className="text-sm text-muted-foreground">Set up your daily health goals to track progress</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Health Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No recent health events</p>
              <p className="text-sm text-muted-foreground">Your health activities will appear here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MyHealthPage;
