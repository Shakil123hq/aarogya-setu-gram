import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const PatientRegisterPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate(); // Initialize navigate
  const [registrationType, setRegistrationType] = useState<'choose' | 'patient' | 'healthWorker'>('choose');
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('en');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    if (step === 1) {
      if (!fullName || !mobileNumber) {
        setError(t("empty_fields_error"));
        return;
      }
      if (!/^[0-9]{10}$/.test(mobileNumber)) {
        setError(t("invalid_mobile_number_error"));
        return;
      }
      // Simulate sending OTP
      console.log('Sending OTP to', mobileNumber);
      alert(t("otp_sent_success")); // User feedback
      setStep(2);
    } else if (step === 2) {
      if (!otp || !password || !confirmPassword) {
        setError(t("empty_fields_error"));
        return;
      }
      if (password !== confirmPassword) {
        setError(t("password_mismatch_error"));
        return;
      }
      // Basic password strength check (can be expanded)
      if (password.length < 6) {
        setError(t("password_strength_error"));
        return;
      }
      setStep(3);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!agreedToTerms) {
      setError(t("agree_to_terms_error"));
      return;
    }

    // Final registration logic
    console.log('Registering patient', { fullName, mobileNumber, password, preferredLanguage, agreedToTerms });
    alert(t("patient_registration_success"));
    // Redirect to login or dashboard
  };

  if (registrationType === 'choose') {
    return (
      <div className="flex items-center justify-center">
        <Card className="w-[400px] mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gov-navy">{t("choose_registration_type")}</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4">
            <Button
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => setRegistrationType('patient')}
            >
              {t("register_as_patient_button")}
            </Button>
            <Button
              className="w-full bg-secondary hover:bg-secondary/90"
              onClick={() => navigate('/health-worker-register')}
            >
              {t("register_as_health_worker_button")}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <Card className="w-[400px] mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gov-navy">{t("patient_registration_title")}</CardTitle>
          <p className="text-sm text-muted-foreground">{t("step_indicator").replace('{step}', String(step)).replace('{totalSteps}', '3')}</p>
        </CardHeader>
        <CardContent className="p-8">
          {error && <p className="text-destructive text-center mb-4">{error}</p>}
          <form onSubmit={step < 3 ? handleNext : handleRegister} className="space-y-4">
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">{t("full_name_label")}</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder={t("enter_full_name_placeholder")}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
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
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  {t("next_step_button")}
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp">{t("otp_label")}</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder={t("enter_otp_placeholder")}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{t("password_label")}</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder={t("create_password_placeholder")}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">{t("confirm_password_label")}</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder={t("confirm_password_placeholder")}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  {t("next_step_button")}
                </Button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredLanguage">{t("preferred_language_label")}</Label>
                  <Select value={preferredLanguage} onValueChange={setPreferredLanguage}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t("select_language_placeholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">हिंदी</SelectItem>
                      <SelectItem value="mr">मराठी</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t("agree_to_terms")}{' '}
                    <Link to="/terms-of-service" className="text-primary hover:underline">
                      {t("terms_of_service_link")}
                    </Link>
                  </label>
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={!agreedToTerms}>
                  {t("register_button")}
                </Button>
              </div>
            )}
          </form>

          {step > 1 && (
            <Button variant="link" onClick={() => setStep(step - 1)} className="mt-4 w-full">
              {t("previous_step_button")}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientRegisterPage;
