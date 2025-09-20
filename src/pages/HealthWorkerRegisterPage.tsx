import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const HealthWorkerRegisterPage = () => {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center">
      <Card className="w-[400px] mx-auto text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gov-navy">{t("health_worker_registration_title")}</CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-4">
          <p className="text-muted-foreground">
            {t("health_worker_registration_message_part1")}
            <br />
            {t("health_worker_registration_message_part2")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthWorkerRegisterPage;
