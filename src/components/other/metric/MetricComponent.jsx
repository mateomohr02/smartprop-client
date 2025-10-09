"use client";

import { useEffect } from "react";
import { metricBuilder } from "@/helpers/metricBuilder";
import { sendMetric } from "@/utils/sendMetric";

const MetricComponent = ({name, ids = [], metadata = {}}) => {

  const filteredIds = [];

  ids.length > 0 ? 

  ids.map((obj) => {
    filteredIds.push(obj.id);
  }) : filteredIds

  useEffect(() => {
    const metric = metricBuilder(name, metadata, ids);
    sendMetric(metric);
  }, [name]);
  return null;
}

export default MetricComponent