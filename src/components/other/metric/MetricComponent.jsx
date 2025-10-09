"use client";

import { useEffect } from "react";
import { metricBuilder } from "@/helpers/metricBuilder";
import { sendMetric } from "@/utils/sendMetric";

const MetricComponent = ({name}) => {

  useEffect(() => {
    const metric = metricBuilder(name);
    sendMetric(metric);
  }, [name]);
  return null;
}

export default MetricComponent