import React, { useState } from 'react';
import { MenuItem, Select, Tabs, Tab, Typography, Box, TextField, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import '../styles/CarLoanCalculator.css';

const CarLoanCalculator = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loanAmount, setLoanAmount] = useState(400000);
  const [years, setYears] = useState(4);
  const [months, setMonths] = useState(0);
  const [interestRate, setInterestRate] = useState(13);
  const [employmentType, setEmploymentType] = useState('Salaried');
  const [monthlyIncome, setMonthlyIncome] = useState(30000);
  const [existingEMI, setExistingEMI] = useState(0);

  const calculateEMI = (principal, years, months, rate) => {
    const totalMonths = years * 12 + months;
    const monthlyRate = rate / 12 / 100;
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
    );
  };

  const emi = calculateEMI(loanAmount, years, months, interestRate);
  const totalInterest = emi * (years * 12 + months) - loanAmount;
  const totalPayable = loanAmount + totalInterest;
  const maxLoanAmount = ((monthlyIncome - existingEMI) / emi) * loanAmount;

  return (
    <div className="container">
      <Typography variant="h4" className="heading"><b>Car Loan Calculator</b></Typography>
      <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)} centered>
        <Tab label="EMI" />
        <Tab label="Loan Estimate" />
      </Tabs>
      {tabIndex === 0 && (
        <Box display="flex" justifyContent="space-between" mt={4}>
          <div className="left-section">
            <Typography variant="h3" className="emi">
              <b>
              ₹{emi.toFixed(0)} <span>per month</span></b>
            </Typography>
            <div className="details">
              
              <Typography>Principal Loan Amount: ₹{loanAmount.toLocaleString()}</Typography>
              <Typography>Total Interest Payable: ₹{totalInterest.toLocaleString()}</Typography>
              <Typography>Total Amount Payable: ₹{totalPayable.toLocaleString()}</Typography>
             
            </div>
          </div>
          <div className="right-section">
            <Typography variant="h6">Loan Amount</Typography>
            <TextField
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              fullWidth
              size="small"
            />
            <Typography variant="h6" mt={2}>Duration of Loan</Typography>
            <Box display="flex" justifyContent="space-between">
              <Select
                value={years}
                onChange={(e) => setYears(e.target.value)}
                displayEmpty
                fullWidth
                size="small"
              >
                {[...Array(6).keys()].map(year => (
                  <MenuItem key={year} value={year}>{year} Year(s)</MenuItem>
                ))}
              </Select>
              <Select
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                displayEmpty
                fullWidth
                size="small"
              >
                {[...Array(12).keys()].map(month => (
                  <MenuItem key={month} value={month}>{month} Month(s)</MenuItem>
                ))}
              </Select>
            </Box>
          </div>
        </Box>
      )}
      {/* Code for Loan Estimate Tab Starts Here */}
      {tabIndex === 1 && (
        <Box display="flex" justifyContent="space-between" mt={4}>
          <div className="left-section">
            <Typography variant="h3" className="max-loan-amount">
              ₹{maxLoanAmount.toFixed(0)} <span>max loan amount</span>
            </Typography>
            <div className="details">
              <Typography>Max EMI: ₹{emi.toFixed(0)}</Typography>
            </div>
          </div>
          <div className="right-section">
            <RadioGroup row value={employmentType} onChange={(e) => setEmploymentType(e.target.value)}>
              <FormControlLabel value="Salaried" control={<Radio size="small" />} label="Salaried" />
              <FormControlLabel value="Self-Employed" control={<Radio size="small" />} label="Self-Employed" />
            </RadioGroup>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <div className="input-group">
                <Typography variant="h8">Monthly Income</Typography>
                <TextField
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  size="small"
                />
              </div>
              <div className="input-group">
                <Typography variant="h8">Already Running EMI</Typography>
                <TextField
                  type="number"
                  value={existingEMI}
                  onChange={(e) => setExistingEMI(Number(e.target.value))}
                  size="small"
                />
              </div>
            </Box>
            <Typography variant="h8" mt={2}>Duration of Loan</Typography>
            <Box display="flex" justifyContent="space-between">
              <Select
                value={years}
                onChange={(e) => setYears(e.target.value)}
                displayEmpty
                fullWidth
                size="small"
              >
                {[...Array(6).keys()].map(year => (
                  <MenuItem key={year} value={year}>{year} Year(s)</MenuItem>
                ))}
              </Select>
              <Select
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                displayEmpty
                fullWidth
                size="small"
              >
                {[...Array(12).keys()].map(month => (
                  <MenuItem key={month} value={month}>{month} Month(s)</MenuItem>
                ))}
              </Select>
            </Box>
            <Typography variant="h8" mt={2}>Interest Rate</Typography>
            <TextField
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              fullWidth
              size="small"
              InputProps={{
                endAdornment: <Typography>%</Typography>,
              }}
            />
          </div>
        </Box>
      )}
      <Typography variant="body2" className="disclaimer">
        Disclaimer: Applicable rate of interest can vary subject to credit profile. Loan approval is at the sole discretion of the finance partner.
      </Typography>
    </div>
  );
};

export default CarLoanCalculator;
