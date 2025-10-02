
Get 
http://203.190.12.138:8001/api/merge

response is given below:
{
    "ok": true,
    "count": 4,
    "files": [
        {
            "filename": "merged_fast_100_rowsfast_100_rowspred_k2_svm_20251002-222605_20251002-191150.csv",
            "url": "http://203.190.12.138:8001/media/mergefiles/merged_fast_100_rowsfast_100_rowspred_k2_svm_20251002-222605_20251002-191150.csv",
            "rows": 100,
            "size_bytes": 83190,
            "modified": "2025-10-02T19:11:50.176323",
            "merge_token": "{\"rel\": \"mergefiles/merged_fast_100_rowsfast_100_rowspred_k2_svm_20251002-222605_20251002-191150.csv\"}:1v4Ojk:fyOGh0jjUDFjUDHelJwmhrJilg-P2VlfQUgw_y1VjIc",
            "rel_path": "mergefiles/merged_fast_100_rowsfast_100_rowspred_k2_svm_20251002-222605_20251002-191150.csv"
        },
        {
            "filename": "merged_koi_train-2koi_test_rawpred_koi_20250928-171133-1_20251002-190338.csv",
            "url": "http://203.190.12.138:8001/media/mergefiles/merged_koi_train-2koi_test_rawpred_koi_20250928-171133-1_20251002-190338.csv",
            "rows": 9564,
            "size_bytes": 3050747,
            "modified": "2025-10-02T19:03:38.800917",
            "merge_token": "{\"rel\": \"mergefiles/merged_koi_train-2koi_test_rawpred_koi_20250928-171133-1_20251002-190338.csv\"}:1v4Ojk:ByB4QV3PQazf7yp3_UdXk4xnJ7GUXg1ANamibrnUC6Q",
            "rel_path": "mergefiles/merged_koi_train-2koi_test_rawpred_koi_20250928-171133-1_20251002-190338.csv"
        },

    ]

}



```
 const handleMerge = async (e) => {
    e.preventDefault();
    if (!mergeForm.file_a || !mergeForm.file_b) {
      setMessages(prev => ({ ...prev, merge: 'Please select both files' }));
      return;
    }

    setLoading(true);
    setMessages(prev => ({ ...prev, merge: 'Merging...' }));

    try {
      const result = await apiService.mergeFiles(
        mergeForm.file_a,
        mergeForm.file_b,
        {
          dedupe: mergeForm.dedupe === 'true',
          output_name: mergeForm.output_name || undefined
        }
      );

      // Select the newly merged file
      setSelectedFile({
        url: result.merged_url,
        filename: result.merged_filename,
        rows: result.merged_rows,
        token: result.merge_token
      });

      setMessages(prev => ({ 
        ...prev, 
        merge: `Merged: ${result.merged_filename}` 
      }));

      // Refresh the list
      fetchExisting();
    } catch (error) {
      setMessages(prev => ({ 
        ...prev, 
        merge: `Merge failed: ${error.message}` 
      }));
    } finally {
      setLoading(false);
    }
  };
```