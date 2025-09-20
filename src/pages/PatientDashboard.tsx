import React from 'react';
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, PlusCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const patientName = "John"; // This would come from user context

const data = [
  { name: 'Day 1', uv: 4000, pv: 2400, amt: 2400, bloodSugar: 110 },
  { name: 'Day 2', uv: 3000, pv: 1398, amt: 2210, bloodSugar: 120 },
  { name: 'Day 3', uv: 2000, pv: 9800, amt: 2290, bloodSugar: 90 },
  { name: 'Day 4', uv: 2780, pv: 3908, amt: 2000, bloodSugar: 135 },
  { name: 'Day 5', uv: 1890, pv: 4800, amt: 2181, bloodSugar: 105 },
  { name: 'Day 6', uv: 2390, pv: 3800, amt: 2500, bloodSugar: 115 },
  { name: 'Day 7', uv: 3490, pv: 4300, amt: 2100, bloodSugar: 125 },
];

const PatientDashboard = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gov-navy flex items-center">
          <img src="/path/to/profile-pic.jpg" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
          {t("welcome_patient").replace('{patientName}', patientName)}
        </h1>
      </div>

      {/* The Vitals Pulse */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-foreground mb-6">{t("vitals_pulse_title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200 shadow-sm animate-pulse-green">
            <CardContent className="p-6">
              <p className="text-lg text-green-700">{t("blood_sugar_label")}</p>
              <h3 className="text-4xl font-bold text-green-800">140 mg/dL</h3>
              <p className="text-sm text-green-600">↓ {t("last_logged").replace('{time}', '5 mins ago')}</p>
              <p className="text-sm text-green-600 mt-2">{t("great_job_in_range")}</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200 shadow-sm animate-pulse-blue">
            <CardContent className="p-6">
              <p className="text-lg text-blue-700">{t("blood_pressure_label")}</p>
              <h3 className="text-4xl font-bold text-blue-800">128/84</h3>
              <p className="text-sm text-blue-600">↑ {t("last_logged").replace('{time}', '1 hour ago')}</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200 shadow-sm animate-pulse-orange">
            <CardContent className="p-6">
              <p className="text-lg text-orange-700">{t("weight_label")}</p>
              <h3 className="text-4xl font-bold text-orange-800">72 kg</h3>
              <p className="text-sm text-orange-600">↔ {t("last_logged").replace('{time}', 'Yesterday')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Progress Journey */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-foreground mb-6">{t("progress_journey_title")}</h2>
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
              <div className="flex items-center gap-2">
                <Select defaultValue="bloodSugar">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={t("select_vital_placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bloodSugar">{t("blood_sugar_label")}</SelectItem>
                    <SelectItem value="bloodPressure">{t("blood_pressure_label")}</SelectItem>
                    <SelectItem value="weight">{t("weight_label")}</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="7days">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={t("select_time_period_placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">{t("last_7_days")}</SelectItem>
                    <SelectItem value="30days">{t("last_30_days")}</SelectItem>
                    <SelectItem value="90days">{t("last_90_days")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <ReferenceArea y1={80} y2={130} fill="#d4edda" strokeOpacity={0.3} />
                <Line type="monotone" dataKey="bloodSugar" stroke="#82ca9d" strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-muted-foreground mt-4">{t("target_zone_label").replace('{range}', '80-130 mg/dL')}</p>
          </CardContent>
        </Card>
      </section>

      {/* Today's Health Rituals & Personalized Health Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Today's Health Rituals */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">{t("health_rituals_title")}</h2>
          <Card className="shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="medication" className="flex items-center text-lg">
                  <input type="checkbox" id="medication" className="mr-2" />
                  {t("take_medication_task").replace('{time}', '7:00 AM')}
                </label>
                <span className="text-green-500">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="log_sugar" className="flex items-center text-lg">
                  <input type="checkbox" id="log_sugar" className="mr-2" />
                  {t("log_blood_sugar_task")}
                </label>
                <span className="text-green-500">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="walk" className="flex items-center text-lg">
                  <input type="checkbox" id="walk" className="mr-2" />
                  {t("walk_task").replace('{minutes}', '15')}
                </label>
                <span className="text-green-500">✓</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Personalized Health Story */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">{t("health_story_title")}</h2>
          <Card className="shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img src="/placeholder.svg" alt="Thumbnail" className="w-20 h-20 object-cover rounded-md" />
                <Link to="#" className="text-lg font-medium text-primary hover:underline">
                  {t("recipe_title_1")}
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <img src="/placeholder.svg" alt="Thumbnail" className="w-20 h-20 object-cover rounded-md" />
                <Link to="#" className="text-lg font-medium text-primary hover:underline">
                  {t("yoga_title_1")}
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <img src="/placeholder.svg" alt="Thumbnail" className="w-20 h-20 object-cover rounded-md" />
                <Link to="#" className="text-lg font-medium text-primary hover:underline">
                  {t("diet_plan_title_1")}
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <Button className="w-16 h-16 rounded-full bg-accent hover:bg-accent/90 shadow-lg flex items-center justify-center p-0">
          <PlusCircle className="w-8 h-8 text-white" />
          <span className="sr-only">{t("log_new_vitals_button")}</span>
        </Button>
      </div>
    </div>
  );
};

export default PatientDashboard;
