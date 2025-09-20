import React from 'react';
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Stethoscope, Hospital, Globe } from 'lucide-react';

const healthWorkerName = "Priya Sharma"; // This would come from user context

const districtData = [
  { name: 'Konkan', patients: 400, healthWorkers: 240 },
  { name: 'Pune', patients: 300, healthWorkers: 139 },
  { name: 'Nashik', patients: 200, healthWorkers: 980 },
  { name: 'Aurangabad', patients: 278, healthWorkers: 390 },
  { name: 'Amravati', patients: 189, healthWorkers: 480 },
  { name: 'Nagpur', patients: 239, healthWorkers: 380 },
];

const HealthWorkerDashboard = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gov-navy flex items-center">
          <img src="/path/to/health-worker-profile-pic.jpg" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
          {t("welcome_health_worker").replace('{healthWorkerName}', healthWorkerName)}
        </h1>
      </div>

      {/* Key Metrics */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-foreground mb-6">{t("key_metrics_title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-blue-50 border-blue-200 shadow-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-lg text-blue-700">{t("total_patients_label")}</p>
                <h3 className="text-4xl font-bold text-blue-800">12,345</h3>
              </div>
              <Users className="w-10 h-10 text-blue-600" />
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200 shadow-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-lg text-green-700">{t("active_campaigns_label")}</p>
                <h3 className="text-4xl font-bold text-green-800">12</h3>
              </div>
              <Stethoscope className="w-10 h-10 text-green-600" />
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200 shadow-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-lg text-orange-700">{t("health_centers_label")}</p>
                <h3 className="text-4xl font-bold text-orange-800">500+</h3>
              </div>
              <Hospital className="w-10 h-10 text-orange-600" />
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200 shadow-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-lg text-purple-700">{t("districts_covered_label")}</p>
                <h3 className="text-4xl font-bold text-purple-800">36</h3>
              </div>
              <Globe className="w-10 h-10 text-purple-600" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Regional Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-foreground mb-6">{t("regional_overview_title")}</h2>
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={districtData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="patients" fill="#8884d8" name={t("patients_count_label")} />
                <Bar dataKey="healthWorkers" fill="#82ca9d" name={t("health_workers_count_label")} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      {/* Action Items/Announcements (Placeholder) */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">{t("action_items_title")}</h2>
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <p className="text-muted-foreground">{t("no_action_items_message")}</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default HealthWorkerDashboard;
