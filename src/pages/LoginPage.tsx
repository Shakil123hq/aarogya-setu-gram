import React from 'react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { t } = useLanguage();
  const [role, setRole] = useState('patient'); // 'patient' or 'healthWorker'
  const [mobileNumber, setMobileNumber] = useState('');
  const [officialId, setOfficialId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    if (role === 'patient') {
      if (!mobileNumber || !password) {
        setError(t("empty_fields_error"));
        return;
      }
    } else {
      if (!officialId || !password) {
        setError(t("empty_fields_error"));
        return;
      }
    }

    // Handle login logic here based on role and credentials
    console.log(`Logging in as ${role}:`, { mobileNumber, officialId, password });
    // Simulate API call and then redirect or show success
    alert(t("login_successful"));
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-[400px] mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gov-navy">{t("login_title")}</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex justify-center mb-6">
            <Button
              variant={role === 'patient' ? 'default' : 'outline'}
              onClick={() => setRole('patient')}
              className="w-1/2 rounded-r-none"
            >
              {t("role_patient")}
            </Button>
            <Button
              variant={role === 'healthWorker' ? 'default' : 'outline'}
              onClick={() => setRole('healthWorker')}
              className="w-1/2 rounded-l-none"
            >
              {t("role_health_worker")}
            </Button>
          </div>

          {error && <p className="text-destructive text-center mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            {role === 'patient' ? (
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">{t("mobile_number_label")}</Label>
                <Input
                  id="mobileNumber"
                  type="text"
                  placeholder={t("enter_mobile_number_placeholder")}
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="officialId">{t("official_id_label")}</Label>
                <Input
                  id="officialId"
                  type="text"
                  placeholder={t("enter_official_id_placeholder")}
                  value={officialId}
                  onChange={(e) => setOfficialId(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="password">{t("password_label")}</Label>
              <Input
                id="password"
                type="password"
                placeholder={t("enter_password_placeholder")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              {t("login_button")}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <Link to="/forgot-password" className="text-primary hover:underline">
              {t("forgot_password_link")}
            </Link>
            <p className="mt-2">
              {t("no_account_question")}{' '}
              <Link to="/register" className="text-primary hover:underline">
                {t("register_link")}
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
